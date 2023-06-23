---
id: docker
title: Dockerfile
---

The last peice we need to take care of in order have our pipleline fully function is a [Dockerfile](https://www.cloudbees.com/blog/what-is-a-dockerfile).

:::info Dockerfile
When you run the `docker` command, Docker uses this file to build the image itself. The Dockerfile is essentially the build instructions to build the image.
:::

At the top level of your project folder, create a new file called `Dockerfile` and copy & paste the following content into it:

```
# For Java 11, try this
FROM adoptopenjdk/openjdk11:latest AS build
ARG JAR_FILE=workspace/build/libs/ci-helloworld-1.0-SNAPSHOT.jar
RUN mkdir -p /workspace
COPY build.gradle /workspace
COPY gradlew /workspace
COPY settings.gradle /workspace
COPY gradle /workspace/gradle
COPY src /workspace/src
WORKDIR /workspace
RUN chmod a+x gradlew
RUN ./gradlew build

FROM adoptopenjdk/openjdk11:latest
COPY --from=build ${JAR_FILE} app.jar
EXPOSE 6379
ENTRYPOINT ["java","-jar","app.jar"]
```

This Dockerfile configuration will create a container image from the Gradle project. The FROM instruction initialises a new build stage and sets the base image as `openjdk11:latest` for subsequent instructions. ARG create a variable named `JAR_FILE` with the given value. `RUN mkdir -p /workspace` creates a folder called `workspace`. `WORKDIR /workspace` sets the working directory to `/workspace` for any `RUN`, `ENTRYPOINT` or `COPY` that follows in the Dockerfile. The `build.gradle`, `settings.gradle`, `gradew` files along with the `src` directory is then copied to `/workspace`. `chmod a+x gradlew` makes sure `gradlew` is executable. After that the shell command `./gradlew build` is ran to build the jar file.

`FROM adoptopenjdk/openjdk11:latest` sets the JDK as the base image. We then copy the jar we created in the `build` phase into a new jar file called `app.jar`. `EXPOSE 6379` informs Docker that the container listens on port `6379`. The last bit, ENTRYPOINT [“java”,”-jar”,”app.jar”] tells the container to run `java -jar app.jar` once the container starts up.

:::danger add, commit, push
Do not forget to git add, commit and push your new Dockerfile.
:::

