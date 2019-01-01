from rest_framework import permissions


class IsAuthenticatedOrCreateOrReadOnly(permissions.IsAuthenticatedOrReadOnly):
    def has_permission(self, request, view):
        return (
            request.method in ('GET', 'HEAD', 'OPTIONS', 'POST') or
            (request.user and request.user.is_authenticated)
        )
