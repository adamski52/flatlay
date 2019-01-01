from django.db import models
from ..models import BaseModel


class Skill(BaseModel):
    name = models.CharField(
        max_length=100,
        unique=True
    )

    proficiency = models.PositiveIntegerField()

    icon_class = models.CharField(
        max_length=100
    )

    class Meta:
        unique_together = ["name", "date_deleted"]
