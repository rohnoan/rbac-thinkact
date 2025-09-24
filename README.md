schema 
1. Organizations (Organisation)
_id → Mongo ID
clerkOrgId → Clerk’s org ID (for mapping)
name → org name
createdAt, updatedAt
Optional: metadata → anything app-specific

2. Users (User)
_id → Mongo ID
clerkUserId → Clerk user ID
email, name → optional cached info
roles → your RBAC roles in your app (optional; Clerk has roles too)
orgs → list of orgs the user belongs to (linking via clerkOrgId)

endpoints
superadmin permissions-
get /org get all orgs
get /org/:id get one org
post /org create new org
patch /org/:id edit org 
delete /org/:id delete org
post /org/:id/invite invite admin

admin permissions(of a particular org)-
get /org/:id/users get all users
get /org/:id/users/:userId get one user
post /org/:id/invite invite new users
patch /org/:id/users/userId update user(make admin remove admin)
delete /org/:id/users/:userId delete user

member permissions(of a particular org)-
get /org/:id see org deets
