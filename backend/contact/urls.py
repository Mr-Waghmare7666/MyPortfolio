from django.urls import path
from .views import contact, home

urlpatterns = [
    path('', home),           # 👈 this fixes "/"
    path('contact/', contact),
]