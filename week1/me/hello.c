#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string name;
    name = get_string("what's your name?");

    printf("hello, %s\n", name);
}
