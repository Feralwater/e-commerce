import React from 'react';
import {
  Attributes,
  AttributesContainer,
  Description,
  Span,
} from '../../styleComponents/ProductScreenStyles';

class DisplayAndValidateProductAttributes extends React.PureComponent {
  getAttributesColor = (attribute, product, validate, startValidate, attributes, setSelectAttribute, setValidate) => (
    <div key={Math.random() * 100_000}>
      <Attributes>
        {attribute.name}
        :
      </Attributes>
      <AttributesContainer>
        {attribute.items.map((x) => (
          <Span
            inStock={product.inStock}
            validate={validate[attribute.name]}
            startValidate={startValidate}
            active={attributes[attribute.name]}
            color={x.value}
            key={Math.random() * 100_000}
            onClick={() => {
              setSelectAttribute(x.value, attribute.name);
              setValidate(attribute.name, true);
            }}
          />
        ))}
      </AttributesContainer>
    </div>
  );

  getAttributes = (attribute, product, validate, startValidate, attributes, setSelectAttribute, setValidate) => (
    <div key={Math.random() * 100_000}>
      <Attributes>
        {attribute.name}
        :
      </Attributes>
      <AttributesContainer>
        {attribute.items.map((x) => (
          <Span
            inStock={product.inStock}
            validate={validate[attribute.name]}
            startValidate={startValidate}
            active={attributes[attribute.name]}
            value={x.value}
            key={Math.random() * 100_000}
            onClick={() => {
              setSelectAttribute(x.value, attribute.name);
              setValidate(attribute.name, true);
            }}
          >
            {x.value}
          </Span>
        ))}
      </AttributesContainer>
    </div>
  );

  render() {
    const {
      product,
      validate,
      startValidate,
      attributes,
      setSelectAttribute,
      setValidate,
    } = this.props;
    return (
      <Description>
        {product.attributes.map((attribute) => (attribute.type === 'swatch'
          ? this.getAttributesColor(attribute, product, validate, startValidate, attributes, setSelectAttribute, setValidate)
          : this.getAttributes(attribute, product, validate, startValidate, attributes, setSelectAttribute, setValidate)))}
      </Description>
    );
  }
}

export default DisplayAndValidateProductAttributes;
