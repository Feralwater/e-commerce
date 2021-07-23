import React from 'react';
import { Features } from '../../styleComponents/CartStyle';
import { AttributesContainer } from '../../styleComponents/ProductScreenStyles';
import { AttributeName, Span } from '../../styleComponents/ProductInCartStyle';

class ChooseProductFeaturesDisplay extends React.PureComponent {
  getAttributeColor=(attribute, item) => (
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

  getAttribute=(attribute, item) => (
    <div key={Math.random() * 100_000}>
      <AttributeName>
        {`${attribute.name}:`}
      </AttributeName>
      <AttributesContainer>
        {attribute.items.map((x) => (
          <Span
            key={Math.random() * 100_000}
            value={x.value}
            active={item.params[attribute.name]}
          >
            {x.value}
          </Span>
        ))}
      </AttributesContainer>
    </div>
  )

  render() {
    const { item } = this.props;
    return (
      <Features>
        {item.attributes.map((attribute) => (
          attribute.type === 'swatch'
            ? this.getAttributeColor(attribute, item)
            : this.getAttribute(attribute, item)))}
      </Features>
    );
  }
}

export default ChooseProductFeaturesDisplay;
