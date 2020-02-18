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
               return redirect('/')
           
       else:
           if(request.user.is_authenticated):
               return redirect('/')
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
          
          
def lumilogin(request):
       if request.method == 'POST':
           username=request.POST['username'];
           password=request.POST['password'];
           if(username is not None or password is not None):
                user = authenticate(request, username=username, password=password)
            # if user is not authenticated
           if (user is not None):
                authorize(request, user)
                return render (request,'lumi1.html');
           else:   
            return render(request,'auth/LumiLogin.html');
       else:
        return render(request,'auth/LumiLogin.html');
           
    

def lumidashbaord(request):
      if(request.user.is_authenticated):
        return render (request,'lumidashboard.html');
      else:
        return render(request,'auth/LumiLogin.html');



def page1(request):
    if(request.user.is_authenticated):
        return render (request,'lumi1.html');
    else:
        return render(request,'auth/LumiLogin.html');


def page2(request):
     if(request.user.is_authenticated):
        return render (request,'lumi2.html');
     else:
        return render(request,'auth/LumiLogin.html');


def page3(request):
     if(request.user.is_authenticated):
        return render (request,'lumi3.html');
     else:
        return render(request,'auth/LumiLogin.html');



def page4(request):
    if(request.user.is_authenticated):
        return render (request,'lumi4.html');
    else:
        return render(request,'auth/LumiLogin.html');