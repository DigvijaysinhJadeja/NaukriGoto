FROM maven:3-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:17-ea-18-jdk-slim
COPY --from=build /target/server-0.0.1-SNAPSHOT.jar server.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","server.jar"]