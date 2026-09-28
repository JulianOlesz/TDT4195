#version 430 core

// Lambertian Shading
//layout (location = 0) in vec3 position;
//layout (location = 1) in vec4 color;
//layout (location = 2) in vec3 normal;
//
//out noperspective vec4 vertexColor;
//out vec3 vertexNormal;
//
//uniform float time;
//uniform mat4 transformation;
//
//void main() {
//    gl_Position = transformation * vec4(position, 1.0);
//    vertexColor = color;
//
//    vertexNormal = normalize(mat3(transformation) * normal);
//
//}

// Phong Shading
layout (location = 0) in vec3 position;
layout (location = 1) in vec4 color;
layout (location = 2) in vec3 normal;

out noperspective vec4 vertexColor;
out vec3 vertexNormal;
out vec3 fragPosition;

uniform float time;
uniform mat4 transformation;

void main() {
    gl_Position = transformation * vec4(position, 1.0);
    vertexColor = color;

    fragPosition = vec3(transformation * vec4(position, 1.0));
    vertexNormal = normalize(mat3(transformation) * normal);

}