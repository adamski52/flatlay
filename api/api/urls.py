from django.conf.urls import url, include
from rest_framework_nested import routers

from api.projects.views import ProjectViewSet
from api.skills.views import SkillViewSet
from api.tags.views import TagViewSet
from api.hearts.views import HeartViewSet

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet, 'project')
router.register(r'tags', TagViewSet, 'tag')
router.register(r'skills', SkillViewSet, 'skill')
router.register(r'hearts', HeartViewSet, 'heart')

projects_router = routers.NestedDefaultRouter(
    router,
    r'projects',
    lookup='project'
)

projects_router.register(
    r'hearts',
    HeartViewSet,
    base_name='project-hearts'
)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^api/', include(projects_router.urls)),
    url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
