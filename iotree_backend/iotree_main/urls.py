# iotree_main/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),  # 👈 This line connects your API
]