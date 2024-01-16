import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Input, MultiSelector } from '../../components';
import { colors } from '../../utils/theme';
import { HomeScreenProps } from '../../utils/type';

const HomeScreen: FC<HomeScreenProps> = ({
  modalState,
  selectAnOption,
  handleSave,
  handleButtonPress,
  handleNavigate,
  workflow,
  setWorkflow,
}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Workflow Name"
        value={workflow.name}
        onChangeText={(text: string) =>
          setWorkflow(prevWorkflow => ({ ...prevWorkflow, name: text }))
        }
        editable={true}
      />
      <Input
        placeholder="Workflow Name"
        value={workflow.value}
        editable={false}
        onChangeText={(text: string) =>
          setWorkflow(prevWorkflow => ({ ...prevWorkflow, value: text }))
        }
      />
      <View style={styles.buttonsWrapper}>
        <Button
          title="Action"
          customStyle={styles.button}
          onPress={() => handleButtonPress('isModalVisibleAction')}
        />
        <Button
          title="Conditional"
          customStyle={styles.ConditionButton}
          onPress={() => handleButtonPress('isModalVisibleCondition')}
        />
        <MultiSelector
          isVisible={modalState.isModalVisibleAction}
          onSave={handleSave}
          onClose={() => handleButtonPress('isModalVisibleAction')}
          txt="Enter Action"
          selectAnOption={selectAnOption}
        />
        <MultiSelector
          isVisible={modalState.isModalVisibleCondition}
          onSave={handleSave}
          onClose={() => handleButtonPress('isModalVisibleCondition')}
          txt="Enter Condition"
          selectAnOption={selectAnOption}
        />
      </View>

      <Button
        title="End"
        customStyle={styles.EndButton}
        onPress={() => handleButtonPress('isModalVisibleEnd')}
      /> 
       <MultiSelector
        isVisible={modalState.isModalVisibleEnd}
        onSave={handleSave}
        onClose={() => handleButtonPress('isModalVisibleEnd')}
        txt="Enter End"
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
