#version 430 core

in noperspective vec4 vertexColor;
//in smooth vec4 vertexColor;

out vec4 color;

void main() {
    color = vertexColor;
}