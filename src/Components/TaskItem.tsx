import { Task } from "@/Types";
import { RootStackParamList } from "@/Types/Stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

export type TaskItemProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  task: Task;
};

const TaskItem = ({ task, navigation }: TaskItemProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { task })}>
      <Text>{task.name}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
