from django.contrib import admin
from django.urls import path, include
from .views import get_routes, get_products

urlpatterns = [
    path('', get_routes),
    path('products/', get_products),
    path('products/<str:pk>/', get_products),
]