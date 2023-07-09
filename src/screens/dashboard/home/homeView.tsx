// Dependencies
import React from 'react';

// Components
import {View} from 'react-native';
import ScreenLayout from '../../../layouts/screen';
import Typography from '../../../components/typography';
import Button from '../../../components/button';
import Icon from '../../../components/icon';

// Types
import {HomeScreenProps} from './types';

// Utils
import {colors, sizes} from '../../../utils';

// Styles
import {homeViewStyles} from './styles';
import ServerChart from '../../../components/serverChart';

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
          <ServerChart
            weekData={[
              {
                x: '27/07/2022',
                y: '0',
              },
              {
                x: '29/07/2022',
                y: '100',
              },
              {
                x: '31/07/2022',
                y: '0',
              },
              {
                x: '02/08/2022',
                y: '200',
              },
              {
                x: '04/08/2022',
                y: '50',
              },
            ]}
            pastWeekData={[
              {
                x: '27/07/2022',
                y: '100',
              },
              {
                x: '29/07/2022',
                y: '200',
              },
              {
                x: '31/07/2022',
                y: '0',
              },
              {
                x: '02/08/2022',
                y: '300',
              },
              {
                x: '04/08/2022',
                y: '100',
              },
            ]}
          />
        </View>
      </View>
    </ScreenLayout>
  );
}

export default HomeView;
