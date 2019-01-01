from django.db import models

from ..models import BaseModel


class Tag(BaseModel):
    name = models.CharField(
        max_length=40,
        unique=True
    )

    class Meta:
        unique_together = ["name", "date_deleted"]
