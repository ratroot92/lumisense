from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.login,name='login'),
    path('register/',views.register,name='register'),
    path('',views.home,name='home'),
    path('logout/',views.logout,name='logout'),
    path('lumi/login/',views.lumilogin,name='lumilogin'),
    path('lumi/page1/',views.page1,name='page1'),
    path('lumi/page2/',views.page2,name='page2'),
    path('lumi/page3/',views.page3,name='page3'),
    path('lumi/page4/',views.page4,name='page4'),
]
