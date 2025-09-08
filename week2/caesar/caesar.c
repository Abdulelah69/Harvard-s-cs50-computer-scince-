#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

bool only_digits(string s);

int main(int argc, string argv[])
{
    if (argc != 2 || !only_digits(argv[1]))
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }

    int k = atoi(argv[1]);
    string text = get_string("Text: ");

    printf("ciphertext: ");

    for (int i = 0, n = strlen(text); i < n; i++)
    {
        if (isupper(text[i]))
        {
            printf("%c", ((text[i] - 'A' + k) % 26) + 'A');
        }
        else if (islower(text[i]))
        {
            printf("%c", ((text[i] - 'a' + k) % 26) + 'a');
        }
        else
        {
            printf("%c", text[i]);
        }
    }

    printf("\n");
    return 0;
}

bool only_digits(string s)
{
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        if (!isdigit(s[i]))
        {
            return false;
        }
    }
    return true;
}
