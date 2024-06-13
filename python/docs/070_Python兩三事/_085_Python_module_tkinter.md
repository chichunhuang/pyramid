---
title: Tkinter GUI
description: Python 視窗介面
keywords: [Python ,Tutorial,Serialization]
---

# Tkinter GUI
> Python 原生 API 內含的基本 GUI 設計套件。  
> 參考: [Turtle Graphic](https://docs.python.org/3/library/turtle.html)  
> https://vocus.cc/article/61f4b93bfd897800014f82a6  

# Basic Tkinter Components
c.pack()方法將 component 包裝到視窗上

* Window , mainloop(), destroy()
* Label, text
* Button, command=fun_do
* Entry (ie text field), get()
* Text (ie TextArea), get()
** Spinbox 捲軸 選取區間內數值, command=fun_do, get() 
** Scale 移動滑桿 選取區間內數值, command=fun_do, get() 
* Radiobutton, command=fun_do, get(), 搭配 variable 進行 radio button 群組
* Checkbutton, command=fun_do, get(), 搭配 variable 進行 CheckBox 群組
** Listbox 展開的 multi dropdown choice, insert(index, option), selectmode=XX_CONSTANT,  bind()
* Menu
    * MacOS 作業系統，由於作業系統限制，必須要先建立主選單，再透過 add_cascade() 增加子選單內容。
    * m.add_command(command=fun_do), ex, def fun_do(event): window.destroy() 關閉視窗
    
        * menubar.add_command(label="Exit", command=exit, accelerator="Command+E") // accelerator 選單註解, exit 是一個function
        * rootWindow.bind_all("<Command-e>", exit) 與上方動作搭配。  使得 rootWind 與 exit fun 綁定，並可以使用快速鍵
        
        
  
  
  
# Layout
pack
grid
place  

vocus.cc/article/62577184fd89780001e55c39
steam.oxxostudio.tw/category/python/tkinter/menu.html
steam.oxxostudio.tw/category/python/tkinter/button-open-multiple-file.html
yhhuang1966.blogspot.com/2021/10/python-gui-tkinter-menu.html


# Frame 切換
blog.csdn.net/qq_34110120/article/details/112872591


# menu : window 切換

```
使用tkinter实现窗口切换可以通过以下步骤实现：

 

 

创建主窗口root和第一个子窗口win1

 

创建切换按钮并绑定点击事件，点击按钮后销毁当前窗口并创建新的子窗口

 

在新的子窗口中添加返回按钮，点击返回按钮后销毁当前窗口并恢复到主窗口

以下是示例代码：

import tkinter as tk

# 创建主窗口

root = tk.Tk()

# 创建第一个子窗口

win1 = tk.Toplevel(root)

win1.title('窗口1')

win1.geometry('200x100')

# 创建切换按钮

btn_switch = tk.Button(win1, text='切换窗口', command=lambda: switch_window(win1))

btn_switch.pack(pady=10)

def switch_window(old_win):

    # 销毁当前窗口

    old_win.destroy()

    # 创建新的子窗口

    win2 = tk.Toplevel(root)

    win2.title('窗口2')

    win2.geometry('200x100')

    # 添加返回按钮

    btn_return = tk.Button(win2, text='返回', command=lambda: switch_window(win2))

    btn_return.pack(pady=10)

# 运行主窗口

root.mainloop()

参数说明：

 

 

 

Toplevel: 创建一个子窗口，和主窗口类似，但不需要指定Tk()对象，只需要指定父级窗口即可。

 

title: 设置窗口标题。

 

geometry: 设置窗口大小和位置。

 

Button: 创建按钮，可以设置按钮的文本和点击事件，其中command参数接受一个函数，当按钮被点击时会调用该函数。

 

pack: 将组件放置在父级容器中，可以设置组件的位置和间距。

使用dataclass可以更加简化代码。dataclass是Python 3.7中新增的一个装饰器，它可以自动为类生成__init__、__repr__等方法，避免了手动编写这些方法的工作。以下是使用dataclass改写后的代码：

from dataclasses import dataclass

import tkinter as tk

@dataclass

class Window:

    title: str

    size: str

    def __post_init__(self):

        self.win = tk.Toplevel()

        self.win.title(self.title)

        self.win.geometry(self.size)

        if self.title != '主窗口':

            btn_return = tk.Button(self.win, text='返回', command=lambda: self.win.destroy())

            btn_return.pack(pady=10)

        btn_switch = tk.Button(self.win, text='切换窗口', command=self.switch_window)

        btn_switch.pack(pady=10)

    def switch_window(self):

        old_win = self.win

        old_win.destroy()

        if self.title == '窗口1':

            Window('窗口2', '200x100')

        else:

            Window('窗口1', '200x100')

root = tk.Tk()

Window('主窗口', '200x100')

root.mainloop()

通过@dataclass装饰器可以定义一个简单的数据类Window，其中包含窗口的标题和大小。在类的__post_init__方法中生成窗口，添加按钮并绑定事件。当点击切换按钮时，销毁旧窗口并创建新窗口，实现了窗口的切换。使用dataclass可以避免大量的重复代码，使得代码更加简洁。
```


# Canvas


# MessageBox

# ttk.Combobox 下拉選單

# ttk.Progressbar

# Files

```python
from tkinter import *
from tkinter import messagebox

window = Tk()
window.title("Hello World!")
window.minsize(width=500, height=500)
# window.geometry("500x500")
# window.config(padx=20, pady=20)
window.resizable(width=False, height=False)
window.config(bg="gold")

# label
label = Label(text="my label", font=("Arial", 14, "bold"), padx=5, pady=5, bg="red", fg="yellow")
label.pack()

# button
def button_clicked():
    label.config(text="Hello World!")

button = Button(text="Click Me", font=("Arial", 14, "bold"), padx=5, pady=5, bg="blue", fg="light green", command=button_clicked)
button.pack()

# entry
entry = Entry(width=30, font=("Arial", 14, "bold"), bg="red", fg="yellow", state=NORMAL)
entry.insert(END, string="some text")
entry.pack()
print(entry.get())

# text
text = Text(height=5, width=30, font=("Arial", 14, "bold"), bg="blue", fg="light green", state=NORMAL)
# text.focus()
text.insert(END, "line 1\nline 2\nline 3")
text.pack()
print(text.get("1.0", "2.4"))

# spinbox
def spinbox_used():
    print(spinbox.get())

spinbox = Spinbox(from_=0, to=10, width=5, font=("Arial", 14, "bold"), command=spinbox_used, bg="red", fg="yellow", state=NORMAL)
spinbox.pack()

# scale
def scale_used(value):
    print(value)

scale = Scale(from_=0, to=10, font=("Arial", 14, "bold"), width=15, orient=HORIZONTAL, length=200, command=scale_used)
scale.pack()

# radiobutton
def radiobutton_used():
    print(radio_state.get())

radio_state = IntVar()
radiobutton1 = Radiobutton(text="Option1", value=1, variable=radio_state, command=radiobutton_used)
radiobutton2 = Radiobutton(text="Option2", value=2, variable=radio_state, command=radiobutton_used)
radiobutton1.pack()
radiobutton2.pack()

# checkbutton
def checkbutton_clicked():
    print(f"Option1: {checked_state1.get()}, Option2: {checked_state2.get()}")

checked_state1 = IntVar()
checked_state2 = IntVar()

checkbutton1 = Checkbutton(text="Option1", variable=checked_state1, command=checkbutton_clicked)
checkbutton2 = Checkbutton(text="Option2", variable=checked_state2, command=checkbutton_clicked)
checkbutton1.pack()
checkbutton2.pack()

# listbox
# def listbox_used(event):
#     print(listbox.get(listbox.curselection()))

listbox = Listbox(width=15, height=4, selectmode=EXTENDED)
options = ["Option1", "Option2", "Option3", "Option4"]
for item in options:
    listbox.insert(options.index(item), item)
# listbox.bind("<<ListboxSelect>>", listbox_used)
listbox.pack()

# menu
menu = Menu()
window.config(menu=menu)

submenu1 = Menu(activebackground="green", activeborderwidth=10, borderwidth=20)
menu.add_cascade(label="menu1", menu=submenu1)

submenu1.add_command(label="label1")
submenu1.add_separator()
submenu1.add_command(label="label2")

submenu2 = Menu()
menu.add_cascade(label="menu2", menu=submenu2)

window.mainloop()

```



__Frame Tab 切換 __

```python
from tkinter import *
import tkinter as tk

class Frame1(tk.Frame):#不继承也可以  第一个页面
    def __init__(self,master):
        super().__init__(master)
        self.place(x=100,y=100)
        label=tk.Label(self,text="fram1")
        label.pack()
        pass
    
class Frame2(tk.Frame): #                  第二个页面
    def __init__(self,master):
        super().__init__(master)
        label=tk.Label(self,text="fram2")
        self.place(x=100,y=100)
        label.pack()
        pass


def bt_click():                    #       按钮切换页面                             
    
    if btn["text"]=="1":
        btn["text"]="2"
        f2.tkraise()               #  此函数把frame提前
    else:
        btn["text"]="1"
        f1.tkraise()

    
# ----------------------------------------------------------------------
if __name__ == "__main__":

    root = tk.Tk()
    root.geometry("800x600")
    
    f1 = Frame1(root)
    f2 = Frame2(root)

    btn = tk.Button(root, text="切换",width=5,height=3, command=bt_click)
    btn.place(x=0,y=0)
    
    


    root.mainloop()
```