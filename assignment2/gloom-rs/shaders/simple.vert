#version 430 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec4 color;

out vec4 vertexColor;

uniform float time; 

void main() {
    float loop = sin(time) * 0.5 + 0.5;

    mat4 matrixVariable = mat4(1.0);


    matrixVariable[0] = vec4(1, 0, 0, 0);
    matrixVariable[1] = vec4(0, 1, 0, 0);
    matrixVariable[2] = vec4(0, 0, 1, 0);
    matrixVariable[3] = vec4(0, 0, loop, 1);

/*
    matrixVariable[0] = vec4(1, 0, 0, 0);
    matrixVariable[1] = vec4(0, 1, 0, 0);
    matrixVariable[2] = vec4(0, 0, 1, 0);
    matrixVariable[3] = vec4(0, 0, 0, 1);
*/
    gl_Position = vec4(position, 1.0)*matrixVariable;
    vertexColor = color;
}