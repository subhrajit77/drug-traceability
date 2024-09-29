from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


class CreateToken(TokenObtainPairView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        from datetime import datetime, timedelta

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="refresh",
            value=response.data["refresh"],
            samesite="None",
            max_age=timedelta(days=5),
            httponly=True,
        )
        response.set_cookie(
            key="access",
            value=response.data["access"],
            samesite="None",
            max_age=timedelta(days=5),
            httponly=True,

        )
        response.data = {"message": "success"}
        return response

class RefreshToken(TokenRefreshView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        from datetime import datetime, timedelta

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="access",
            value=response.data["access"],
            samesite="None",
            max_age=timedelta(days=5),
        )
        response.data = {"message": "success"}
        return response