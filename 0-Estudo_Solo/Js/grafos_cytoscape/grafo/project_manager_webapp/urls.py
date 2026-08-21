 
from django.urls import path 
from project_manager_webapp import views 

urlpatterns = [  
    path('', views.index, name='index') ,
    path('project_manager/', views.index, name='index') 
]
