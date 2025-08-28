from rest_framework import viewsets
from .models import Member
from .serializer import TaskSerializer

# Create your views here.
# Estas funciones responden a algo del cliente, 
# reciben un request y devuelven una respuesta (eliminar, agregar, etc.)

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = TaskSerializer