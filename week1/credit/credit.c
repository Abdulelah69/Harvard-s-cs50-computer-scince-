#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long card;

    do
    {
        card = get_long("number: ");
    }
    while (card < 0);

    int length = 0;
    long tempcard = card;

    do
    {
        length++;
        tempcard /= 10;
    }
    while (tempcard > 0);

    if (length != 13 && length != 15 && length != 16)
    {
        printf("INVALID\n");
        return 0;
    }

    int sum1 = 0, sum2 = 0, total = 0;
    long mod1, mod2, d1, d2;
    tempcard = card;

    do
    {
        mod1 = tempcard % 10;
        sum1 += mod1;
        tempcard /= 10;

        mod2 = tempcard % 10;
        mod2 *= 2;
        d1 = mod2 / 10;
        d2 = mod2 % 10;
        sum2 = sum2 + d1 + d2;

        tempcard /= 10;
    }
    while (tempcard > 0);

    total = sum1 + sum2;

    if (total % 10 != 0)
    {
        printf("INVALID\n");
        return 0;
    }
    else
    {
        long start = card;

        do
        {
            start /= 10;
        }
        while (start >= 100);

        if ((length == 13 || length == 16) && (start / 10 == 4))
        {
            printf("VISA\n");
        }
        else if (length == 15 && (start == 34 || start == 37))
        {
            printf("AMEX\n");
        }
        else if (length == 16 && (start >= 51 && start <= 55))
        {
            printf("MASTERCARD\n");
        }
        else
        {
            printf("INVALID\n");
            return 0;
        }
    }
}
