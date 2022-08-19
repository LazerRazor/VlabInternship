from anastruct import SystemElements
import matplotlib.pyplot as plt
ss = SystemElements()


def cc():
    global ss
    ss.add_element(location=[[1, 1], [10, 10]])
    ss.add_element(location=[[10, 10], [100, 100]])
    return ss.show_structure()




