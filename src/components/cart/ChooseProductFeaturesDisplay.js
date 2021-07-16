import React from 'react';
import { Features } from '../../styleComponents/CartStyle';
import { AttributesContainer, Span } from '../../styleComponents/ProductScreenStyles';
import { AttributeName } from '../../styleComponents/ProductInCartStyle';

class ChooseProductFeaturesDisplay extends React.PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div>
        <Features>
          {item.attributes.map((attribute) => (attribute.type === 'swatch'
            ? (
              (
                <div key={Math.random() * 100_000}>
                  <AttributesContainer>
                    {attribute.items.map((x) => (
                      <Span
                        color={x.value}
                        key={Math.random() * 100_000}
                        active={item.params[attribute.name]}
                      />
                    ))}
                  </AttributesContainer>
                </div>
              )
            )
            : (
              (
                <AttributeName key={Math.random() * 100_000}>
                  <div>{attribute.name}</div>
                  <AttributesContainer>
                    {attribute.items.map((x) => (
                      <Span
                        key={Math.random() * 100_000}
                        active={item.params[attribute.name]}
                        value={x.value}
                      >
                        {x.value}
                      </Span>
                    ))}
                  </AttributesContainer>
                </AttributeName>
              )
            )))}
        </Features>
      </div>
    );
  }
}

export default ChooseProductFeaturesDisplay;
