#version 430 core

out vec4 color;

void main()
{
    // simply performs a modulo on the x and y coordinates, so that they "loop" every 200 pixels. 
    // Then half of the 200 pixel range is dark and the other is light
    // To get a checker pattern we have to check for equality or inequality such that the x and y coordinates aren't both true at the same time
    if ((mod(gl_FragCoord.x, 200) < 100) != (mod(gl_FragCoord.y, 200) < 100)) {
        color = vec4(0.5f, 0.5f, 0.8f, 1.0f);
    } else {
        color = vec4(0.2f, 0.2f, 0.8f, 1.0f);
    }
}