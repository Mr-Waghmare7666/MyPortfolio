from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from django.http import HttpResponse
from rest_framework import status


@api_view(['GET', 'POST'])
def contact(request):
    if request.method == 'GET':
        return Response({"status": "Contact endpoint active"}, status=status.HTTP_200_OK)

    data = request.data
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    message = (data.get('message') or '').strip()

    if not name or not email or not message:
        return Response(
            {"error": "Name, email, and message are required."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        contact_entry = Contact.objects.create(name=name, email=email, message=message)
    except Exception:
        return Response(
            {"error": "Unable to save your message right now."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    return Response(
        {"status": "Message saved successfully", "id": contact_entry.id},
        status=status.HTTP_201_CREATED,
    )


def home(request):
    return HttpResponse("Backend is running")