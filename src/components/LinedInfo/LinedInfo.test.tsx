import { render } from '@testing-library/react';
import { LinedInfo } from '.';

describe('LinedInfo', () => {
  it('should render "-" when content is empty', () => {
    const { queryByText } = render(<LinedInfo title='Example Title' content='' />);
    expect(queryByText('-')).toBeInTheDocument();
  });

  it('should render "-" when content is unknown', () => {
    const { queryByText } = render(<LinedInfo title='Example Title' content='unknown' />);
    expect(queryByText('-')).toBeInTheDocument();
  });

  it('should render content when content is not empty or unknown', () => {
    const { queryByText } = render(<LinedInfo title='Example Title' content='Example Content' />);
    expect(queryByText('Example Content')).toBeInTheDocument();
  });
});
