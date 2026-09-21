#version 430 core

in noperspective vec4 vertexColor;
in vec3 vertexNormal;

out vec4 color;

void main() {
    vec3 lightDirection = normalize(vec3(0.8, -0.5, 0.6));

    vec3 normalizedNormal = normalize(vertexNormal);
    vec3 normalizedLight = normalize(lightDirection);

    float diffuse = max(0.0, dot(normalizedNormal, -normalizedLight));

    color = vec4(vertexColor.rgb * diffuse, 1.0);

}