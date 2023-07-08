// Dependencies
import React from 'react';

// Components
import {View} from 'react-native';
import ScreenLayout from '../../../layouts/screen';

// Types
import {HomeScreenProps} from './types';
import Button from '../../../components/button';
import {colors, sizes} from '../../../utils';
import Icon from '../../../components/icon';
import {homeViewStyles} from './styles';
import Typography from '../../../components/typography';

function HomeView(props: HomeScreenProps): JSX.Element {
  const {} = props;
  const {
    continerTopActionsStyle,
    containerContentStyle,
    lineSeparatorStyle,
    containerStadisticsStyle,
    containerStadisticItemStyle,
    // Card
    cardContainerStyle,
    graphycFlagsStyle,
    flagContainerStyle,
    badgeStyle,
  } = homeViewStyles();
  return (
    <ScreenLayout headerShown>
      <View style={containerContentStyle}>
        <View style={continerTopActionsStyle}>
          <Button
            small
            backgroundColor={colors.background}
            textColor={colors.text}
            Icon={<Icon.Layer scale={0.5} />}
            borderColor={colors.secondary}>
            {'Imprimir'}
          </Button>
          <Button
            small
            Icon={<Icon.Layer scale={0.5} color={colors.white} />}
            borderColor={colors.secondary}>
            {'Exportar Excel'}
          </Button>
        </View>
        <View style={lineSeparatorStyle} />
        <View style={containerStadisticsStyle}>
          <View style={containerStadisticItemStyle}>
            <Typography
              color={colors.textMuted}
              size={sizes.small}
              weight={'Regular'}>
              {'Proyectos'}
            </Typography>
            <Typography
              color={colors.black}
              size={sizes.normal}
              weight={'Bold'}>
              {'100'}
            </Typography>
          </View>
          <View style={containerStadisticItemStyle}>
            <Typography
              color={colors.textMuted}
              size={sizes.small}
              weight={'Regular'}>
              {'Incidencias registradas'}
            </Typography>
            <Typography
              color={colors.black}
              size={sizes.normal}
              weight={'Bold'}>
              {'23'}
            </Typography>
          </View>
          <View style={containerStadisticItemStyle}>
            <Typography
              color={colors.textMuted}
              size={sizes.small}
              weight={'Regular'}>
              {'Error despliegue'}
            </Typography>
            <Typography
              color={colors.black}
              size={sizes.normal}
              weight={'Bold'}>
              {'150'}
            </Typography>
          </View>
        </View>
        <View style={cardContainerStyle}>
          <Typography
            size={sizes.normal}
            weight={'Medium'}
            color={colors.black}>
            {'Detalles del servidor'}
          </Typography>
          <Typography
            size={sizes.normal}
            weight={'Regular'}
            color={colors.textMuted}>
            {
              'Información sobre el consumo y el uso del servidor principal para desarrollo'
            }
          </Typography>
          <View style={graphycFlagsStyle}>
            <View style={flagContainerStyle}>
              <View style={badgeStyle} />
              <Typography
                size={sizes.small}
                weight={'Regular'}
                color={colors.textMuted}>
                {'Semama'}
              </Typography>
            </View>
            <View style={flagContainerStyle}>
              <View style={badgeStyle} />
              <Typography
                size={sizes.small}
                weight={'Regular'}
                color={colors.textMuted}>
                {'Semama Anterior'}
              </Typography>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
}

export default HomeView;
