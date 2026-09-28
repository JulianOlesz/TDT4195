#version 430 core

// Lambertian Shading
//in noperspective vec4 vertexColor;
//in vec3 vertexNormal;
//
//out vec4 color;
//
//void main() {
//    vec3 lightDirection = normalize(vec3(0.8, -0.5, 0.6));
//
//    vec3 normalizedNormal = normalize(vertexNormal);
//    vec3 normalizedLight = normalize(lightDirection);
//
//    float diffuse = max(0.0, dot(normalizedNormal, -normalizedLight));
//
//    color = vec4(vertexColor.rgb * diffuse, 1.0);
//
//}

// Phong Shading
in noperspective vec4 vertexColor;
in vec3 vertexNormal;
out vec3 fragPosition;

out vec4 color;
uniform vec3 cameraPosition;

void main() {
    vec3 N = normalize(vertexNormal);
    vec3 L = normalize(vec3(0.8, 0.5, 0.6));

    float ambientStrength = 0.3;
    vec3 ambient = ambientStrength * vertexColor.rgb;

    float diff = max(0.0, dot(N, L));
    vec3 diffuse = diff * vertexColor.rgb;

    float specularStrength = 0.5;
    vec3 V = normalize(cameraPosition - fragPosition);
    vec3 R = reflect(-L, N);

    float shininess = 32.0;
    float spec = pow(max(0.0, dot(V, R)), shininess);
    vec3 specular = specularStrength * spec * vec3(1.0, 1.0, 1.0);

    vec3 finalRGB = ambient + diffuse + specular;
    color = vec4(finalRGB, vertexColor.a);
}