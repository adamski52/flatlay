from api.hearts.models import Heart
from api.hearts.serializers import HeartSerializer
from api.permissions import IsAuthenticatedOrCreateOrReadOnly
from api.views import BaseViewSet


class HeartViewSet(BaseViewSet):
    permission_classes = [
        IsAuthenticatedOrCreateOrReadOnly
    ]

    serializers = {
        "default": HeartSerializer
    }

    def get_queryset(self):
        return Heart.objects.all()
