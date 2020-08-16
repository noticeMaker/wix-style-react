export const basicExample = `
    <TestimonialList
        testimonials={[
          {
            id: '0001',
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            id: '0002',
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            id: '0003',
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;

export const columnsExample = `
    <TestimonialList
        cols={2}
        testimonials={[
          {
            id: '0001',
            avatar: <Avatar name="Guy in glasses" size="size60"/>,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            id: '0002',
            avatar: <Avatar name="Person with a hat" size="size60"/>,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            id: '0003',
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
          {
            id: '0004',
            avatar: <Avatar name="Smiling lady" size="size60"/>,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;

export const withoutAvatarExample = `
    <TestimonialList
        testimonials={[
          {
            id: '0001',
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses'
          },
          {
            id: '0002',
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat'
          },
          {
            id: '0003',
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady'
          },
        ]}
    />
`;
