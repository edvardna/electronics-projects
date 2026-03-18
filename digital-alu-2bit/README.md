# 🧠 Custom 2-Bit Microcontroller System (ALU-Based Architecture)

A fully functional 2-bit microcontroller built from discrete digital logic components, implementing a complete fetch–decode–execute cycle.

---

## 🚀 Overview
This project presents the design and implementation of a **2-bit microcontroller system**, constructed entirely from basic digital logic components.

Unlike a standalone ALU, this system integrates:
- Arithmetic Logic Unit (ALU)
- Registers
- Memory (SRAM)
- Control Unit
- Program Counter
- Clock system

Together, these components form a complete computing system capable of executing a pre-loaded program autonomously.

The architecture follows a simplified **Harvard-style design**, where instruction execution and data flow are clearly structured through a defined datapath and control logic.

This project bridges the gap between theoretical computer architecture and real hardware implementation.

---

## 🧠 Key Features
- Fully functional **2-bit microcontroller architecture**
- Custom-designed **2-bit ALU (ADD, SUB, AND, OR)**
- **Register-based datapath** (built from flip-flops)
- **Instruction Register (IR)** for opcode handling
- **Program Counter (PC)** for sequential execution
- **SRAM-based program memory**
- **Control Unit (decoder + multiplexers)**
- **Clock-driven operation using NE555 timer**
- Autonomous **fetch–decode–execute cycle**
- LED-based real-time output visualization

---

## 🛠 Technologies & Tools
- **NI Multisim** → circuit simulation & validation  
- **Logisim** → digital architecture design  
- **TTL Logic ICs (74xx series)**:
  - 7408 (AND)
  - 7432 (OR)
  - 7486 (XOR)
  - 7404 (NOT)
  - 74LS175 (flip-flop registers)
  - 74LS373 (latch / memory interface)
  - 74LS153 (multiplexer / decoder)
- **SRAM memory module**
- **NE555 timer** → clock generation  
- Breadboard-based hardware implementation  

---

## ⚙️ System Architecture

The system is composed of multiple interconnected subsystems forming a complete **digital datapath architecture**.

### 🔹 ALU (Arithmetic Logic Unit)
- Performs core operations:
  - ADD
  - SUB
  - AND
  - OR
- Built from fundamental logic gates
- Designed as combinational logic

---

### 🔹 Registers
- Custom-built using flip-flops  
- Store operands, intermediate values, and results  
- Includes **Instruction Register (IR)**  

---

### 🔹 Memory (SRAM)
- Stores:
  - Program instructions (opcodes)
  - Data values  
- Enables execution of a pre-defined program  

---

### 🔹 Program Counter (PC)
- Holds address of next instruction  
- Automatically increments each clock cycle  
- Enables sequential instruction execution  

---

### 🔹 Control Unit
- Built using decoders and multiplexers  
- Interprets opcode from IR  
- Generates control signals for:
  - ALU operation selection  
  - Register control  
  - Data routing  

---

### 🔹 Clock System
- Implemented using **NE555 timer**  
- Provides stable clock signal (~1–10 Hz)  
- Synchronizes all system operations  

---

## 🔄 Instruction Cycle
The system executes a simplified **fetch–decode–execute cycle**:

1. **Fetch**
   - Instruction loaded from SRAM via Program Counter  

2. **Decode**
   - Control Unit interprets opcode  

3. **Execute**
   - ALU performs selected operation  
   - Result stored in registers  

This process repeats automatically with each clock cycle.

---

## 🧪 Design & Implementation

The project followed a structured engineering workflow:

- Designed initial architecture in **Logisim**
- Converted design to **Multisim for circuit-level validation**
- Built system using **modular approach**:
  - ALU
  - Registers
  - Clock
  - Control logic
- Integrated all subsystems into a **single working hardware system**

As described in the project report :contentReference[oaicite:0]{index=0}, modular testing significantly improved debugging and system reliability.

---

## 📸 Preview
<img width="1536" height="2048" alt="image" src="https://github.com/user-attachments/assets/59dd3d6d-5b47-4a2d-a33c-348654e6bb05" />


---

## 📈 Results
- Successfully built a **standalone microcontroller system**
- System executed a **pre-loaded program autonomously**
- LED outputs provided real-time visualization of execution
- Verified correct operation of instruction cycle

Minor issues were observed in specific logic paths (e.g., OR function and carry handling), highlighting real-world hardware challenges :contentReference[oaicite:1]{index=1}.

---

## 🎯 Purpose
The goal of this project was to:
- Understand **computer architecture at hardware level**
- Implement a full **datapath + control system**
- Bridge theory and practice in **digital design**
- Learn debugging and integration of complex systems  

---

## 📚 Key Learnings
- Importance of **modular design and testing**
- Differences between simulation and real hardware behavior  
- Handling **signal levels, timing, and floating inputs**
- Practical debugging of digital circuits  
- Deep understanding of how processors operate internally  

---

## 🔗 Future Improvements
- Expand to **4-bit / 8-bit architecture**
- Add **status flags (zero, carry, overflow)**
- Improve control unit (microcode / FSM)
- Replace breadboard with **custom PCB**
- Increase clock speed and stability  
- Extend instruction set  

---

## 👤 Author
Edvárd Nagy  
