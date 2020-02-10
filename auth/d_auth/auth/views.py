from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth  import authenticate,login as authorize,logout as deauth

# Create your views here.


def login(request):
       form = AuthenticationForm()
       if(request.method == 'POST'):
           form = AuthenticationForm()
           username=request.POST['username']
           password=request.POST['password']
           user =authenticate(username=username,password=password);
           if user is None:
                messages.add_message(request,messages.INFO,'Username or  Password is not valid ')
                return redirect('/login')
           else:
               authorize(request,user)
               return redirect('/home')
           
       else:
           if(request.user.is_authenticated):
               return redirect('/home')
           form = AuthenticationForm()
           
       return render(request, 'auth/login.html', {'title': 'Login', 'form': form})


def register(request):
       form = UserCreationForm()
       if request.method == 'POST':
            form = UserCreationForm(request.POST)
            if form.is_valid():
                form.save()
                messages.add_message(request,messages.SUCCESS,'User successfully registered')
                return redirect('/login')
       return render(request, 'auth/register.html', {'title': 'Registration', 'form': form})


def home(request):
    if(request.user.is_authenticated):
        return render(request,'home.html')
    return redirect('/login')

def logout(request):
      if(request.user.is_authenticated):
          
        deauth(request)
        messages.add_message(request,messages.SUCCESS,'User has been successfully logged out  ')
      else:
          messages.add_message(request,messages.INFO,'Login first')
      return redirect('/login')
          