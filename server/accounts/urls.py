from rest_framework_simplejwt import views as jwt_views

from rest_framework import generics, viewsets

from django.urls import path
from .views import *

urlpatterns = [
    path("token/", CreateToken.as_view(), name="token_obtain_pair"),
    path("token/refresh/", RefreshToken.as_view(), name="token_refresh"),
    path("token/verify/", jwt_views.TokenVerifyView.as_view(), name="token_verify"),
]
