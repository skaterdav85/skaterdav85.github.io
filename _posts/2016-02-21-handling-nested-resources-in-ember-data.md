---
layout: post
title: Handling Nested Resources in Ember Data
date: 2016-02-21
description: Many APIs use nested resources. But how do you handle that in Ember Data? Let me show you.
keywords: nested resources, ember data
---

Many APIs use nested resources. That is, a path that might look something like: `/users/5/pets`, where you can access a collection of `pet` resources under the `user` resource. But how do you handle that in Ember Data?

Ember Data supports a property called `links` on individual resources, which can point to the related data. For example, let's say we have a `user` model with async `belongsTo` and `hasMany` relationships:

```js
export default DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  pets: DS.hasMany('pet', { async: true }),
  company: DS.belongsTo('company', { async: true })
});
```

If we made a request to `/api/v1/users`, each `user` object can have a links property:

```js
{
  "users": [
    {
      "id": 1,
      "first": "David",
      "last": "Tang",
      "links": {
        "company": "/api/v1/users/1/company",
        "pets": "/api/v1/users/1/pets"
      }
    },
    ...
  ]
}
```

When you try and access `user.pets` or `user.company`, Ember Data will trigger a fetch using these URLs defined in `links`. The responses of these endpoints should follow the conventions of the serializer you are using.

As noted in the API documentation:

> The format of your links value will influence the final request URL via the urlPrefix method: Links beginning with //, http://, https://, will be used as is, with no further manipulation. Links beginning with a single / will have the current adapter's host value prepended to it. Links with no beginning / will have a parentURL prepended to it, via the current adapter's buildURL.

Now maybe your API doesn't return a `links` property but this is how your related data needs to be accessed. How can you handle that? What you can do is override one of the normalization methods in the serializer like `normalize`, `normalizeResponse`, `normalizeFindAllResponse`, etc, and create a `links` property for each individual resource:

```js
// app/serializers/user.js
export default DS.RESTSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    payload.users.map((user) => {
      user.links = {
        pets: `/api/v1/users/${user.id}/pets`,
        company: `/api/v1/users/${user.id}/company`
      };
    });

    return this._super(...arguments);
  }
});
```

Have you found another way of doing this? Let me know in the comments!