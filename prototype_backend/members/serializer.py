from rest_framework import serializers
from .models import Member

#Convierte los tipos a JSON

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'
