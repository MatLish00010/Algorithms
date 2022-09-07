import { Card, Typography } from '@mui/material';

import Container from 'theme/components/Container';
import { H1PageTitle } from 'theme/components/PageTitles';
import { CodeCard } from 'theme/components/Cards';
import { Symbols, Variable, VariableName } from 'theme/components/CodeSyntax';

const BinarySearch = () => {
  const currentNumber = 17;
  const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const findPosition = (number: number, arr: number[]) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      const mid = Math.ceil((start + end) / 2);
      if (arr[mid] === number) {
        alert(`Position: ${mid}`);
        return;
      } else if (arr[mid] < number) {
        start = mid + 1;
      } else if (arr[mid] > number) {
        end = mid - 1;
      }
    }
    alert('Number not in array');
  };

  // findPosition(currentNumber, sortedArr);

  return (
    <Container>
      <H1PageTitle variant="h3" sx={{ textAlign: 'center' }}>
        Binary Search
      </H1PageTitle>
      <Card sx={{ mt: 2, p: 2 }}>
        <Typography mb={2}>In this example, I will show you how to implement a simple binary search in js.</Typography>
        <CodeCard>
          <code>
            <Typography>
              <Variable>const</Variable>
              <VariableName> currentNumber</VariableName> <Symbols>=</Symbols> 17;
            </Typography>
            <Typography mb={2}>
              <Variable>const</Variable> <VariableName>sortedArr</VariableName> <Symbols>=</Symbols> [1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            </Typography>
            <Typography mb={2}>
              <Variable>const</Variable> <VariableName>findPosition</VariableName> <Symbols>=</Symbols> (number: number,
              arr: number[]) <Symbols>{'=>'}</Symbols> {'{'}
            </Typography>
            <Typography>
              <Variable>let</Variable> <VariableName>start</VariableName> <Symbols>=</Symbols> 0;
            </Typography>
            <Typography mb={2}>
              <Variable>let</Variable> <VariableName>end</VariableName>
              <Symbols> =</Symbols> arr.length <Symbols>-</Symbols> 1;
            </Typography>
            <Typography>
              while (start <Symbols>{'<='}</Symbols> end) {'{'}
            </Typography>
            <Typography ml={1}>
              <Variable>const</Variable> <VariableName>mid</VariableName>
              <Symbols>=</Symbols> Math.ceil((start <Symbols>+</Symbols> end) <Symbols>/</Symbols> 2);
            </Typography>
            <br />
            <Typography ml={1}>
              if (arr[mid] <Symbols>===</Symbols> number) {'{'}
            </Typography>
            <Typography ml={3}>alert(`Position: {'${mid}'}`);</Typography>
            <Typography ml={3}>return;</Typography>
            <Typography ml={2}>
              {'}'} else if (arr[mid] <Symbols>{'<'}</Symbols> number) {'{'}
            </Typography>
            <Typography ml={2}>
              start <Symbols>=</Symbols> mid <Symbols>+</Symbols> 1;
            </Typography>
            <Typography ml={2}>
              {'}'} else if (arr[mid] <Symbols>{'>'}</Symbols> number) {'{'}
            </Typography>
            <Typography ml={2}>
              end <Symbols>=</Symbols> mid <Symbols>-</Symbols> 1;
            </Typography>
            <Typography ml={2}>{'}'}</Typography>
            <Typography ml={1}>{'}'}</Typography>
            <Typography ml={1}>
              <VariableName>alert</VariableName>('Number not in array');
            </Typography>
            {'};'}
          </code>
        </CodeCard>
      </Card>
    </Container>
  );
};

export default BinarySearch;
