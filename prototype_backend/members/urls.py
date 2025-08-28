from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from . import views

# Este codigo genera las rutas automaticamente
# GET, POST, DELETE, PUT

router = routers.DefaultRouter()
router.register(r'members', views.MemberViewSet, 'members')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/',include_docs_urls(title='Members API')),
]

