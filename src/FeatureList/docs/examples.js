export const basicExample = `
    <FeatureList
      features={[
          {
            id: '0001',
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            id: '0003',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;

export const columnsExample = `
    <FeatureList
      cols={2}
      features={[
          {
            id: '0001',
            image: <Image width={60} height={60} />,
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            image: <Image width={60} height={60} />,
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            id: '0003',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
          {
            id: '0004',
            image: <Image width={60} height={60} />,
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;

export const withoutImagesExample = `
    <FeatureList
      features={[
          {
            id: '0001',
            title: 'Remove Wix Ads',
            text: "Enjoy a website that's completely your own brand by removing Wix ads.",
          },
          {
            id: '0002',
            title: 'Connect a Custom Domain',
            text: "Get your business found with a custom domain.",
          },
          {
            id: '0003',
            title: 'Accept Online Payment',
            text: "Let your customers and clients pay you online at checkout.",
          },
        ]}
    />
`;
