## What you'll learn and do

* install Docker software for your platform
* run a software image in a container
* browse for an image on Docker Hub
* create your own image and run it in a container
* create a Docker Hub account and an image repository
* create an image of your own
* push your image to Docker Hub for others to use

### 一. Install Docker and run hello-world
* Step 1:Install Docker
* Step 2:Verify your installation

#### Step 1: Install Docker 
#### Step 2: Verify your installation
1. Open a command-line terminal,and run Docker command `docker version` to verity that Docker is working ad expected.
2. Type the `docker run hello-world` commad and press RETURN.
3. Run `docker ps -a` to show all containers on the system.The commad `docker ps` show only currently running containers.

### 二. Understand images & containers
Docker Engine provides the core Docker technology that enables images and containers. 
* Image is a filesystem and parameters to use at runtime.It doesn't have state and never changes.
* Container is a running instance of an image.

Docker Engine lets people create and share sofrware through Docker images. Using Docker Engine,you don't have to worry about whether your computer can run the software in a Docker image.
Docker container can always run it.

### 三. Find and run the whalesay image
* Step 1: Locate the whalesay image
* Step 2: Run the whalesay image

### 四. Build your own image
* Step 1:Write a Dockerfile
* Step 2:Build an image from your Dockerfile
* Step 3:Learn about the build process
* Step 4:Run your new docker-whale

### 五. Create a Docker Hub account and repository
* Step 1:Sign up for an account
* Step 2:Verify your email and add a repository

### 六. Tag,push,and pull your image
* Step 1:Tag and push the image
* Step 2:Pull your new image



