import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Input, MultiSelector} from '../../components';
import {colors} from '../../utils/theme';
import {HomeScreenProps} from '..';

const HomeScreen: React.FC<HomeScreenProps> = ({
  name,
  setName,
  isModalVisibleAction,
  setModalVisibleAction,
  isModalVisibleCondition,
  setModalVisibleCondition,
  isModalVisibleEnd,
  setModalVisibleEnd,
  selectAnOption,
  handleSave,
  handleButtonPress,
  handleNavigate,
  value,
  setValue,
}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Workflow Name"
        value={name}
        onChangeText={(text: string) => setName(text)}
        editable={true}
      />
      <Input
        placeholder="Workflow Name"
        value={value}
        editable={false}
        onChangeText={(text: string) => setValue(text)}
      />
      <View style={styles.buttonsWrapper}>
        <Button
          title="Action"
          customStyle={styles.button}
          onPress={() => handleButtonPress('Action')}
        />
        <Button
          title="Conditional"
          customStyle={styles.ConditionButton}
          onPress={() => handleButtonPress('Conditional')}
        />
        <MultiSelector
          isVisible={isModalVisibleAction}
          onSave={handleSave}
          onClose={() => setModalVisibleAction(false)}
          txt="Enter Action"
          selectAnOption={selectAnOption}
        />
        <MultiSelector
          isVisible={isModalVisibleCondition}
          onSave={handleSave}
          onClose={() => setModalVisibleCondition(false)}
          txt="Enter Condition"
          selectAnOption={selectAnOption}
        />
      </View>

      <Button
        title="End"
        customStyle={styles.EndButton}
        onPress={() => handleButtonPress('End')}
      />
      <MultiSelector
        isVisible={isModalVisibleEnd}
        onSave={handleSave}
        onClose={() => setModalVisibleEnd(false)}
        txt="End"
        selectAnOption={selectAnOption}
      />
      <Button
        title="Done"
        customStyle={styles.doneButton}
        onPress={handleNavigate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: 15,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  button: {
    width: 150,
    backgroundColor: colors.lightGreenColor,
  },
  ConditionButton: {
    backgroundColor: colors.lightRedColor,
    width: 150,
  },
  EndButton: {
    backgroundColor: colors.blackColor,
    width: '100%',
    marginTop: 10,
  },
  doneButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
  },
});

export default HomeScreen;
