from django.db import models

from api.models import BaseModel


class Heart(BaseModel):
    project = models.ForeignKey(
        "projects.Project",
        on_delete=models.DO_NOTHING
    )
