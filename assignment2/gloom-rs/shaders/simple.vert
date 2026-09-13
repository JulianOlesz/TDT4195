#version 430 core

layout(location = 0) in vec3 position;
layout(location = 1) in vec4 color;

out vec4 vertexColor;

uniform float time; 
uniform mat4 transformation; 

void main() {
    float loop = sin(time) * 0.5 + 0.5;

/*
    mat4 matrixVariable = mat4(1.0);

    // Matrices in opengl are the wrong way, so each index is actually a column
    //                       x, y, z, w
    matrixVariable[0] = vec4(1, 0, 0, 0); // x-axis
    matrixVariable[1] = vec4(1.2, 1, 0, 0);   // y-axis
    matrixVariable[2] = vec4(0, 0, 1, 0);   // z-axis
    matrixVariable[3] = vec4(0, 0, 0, 1);   // w
*/


    gl_Position = transformation * vec4(position, 1.0);
    vertexColor = color;
}