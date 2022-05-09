pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier2 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;  
   signal output c;  

   // Constraints.  
   c <== a * b;  
}

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d; 

	 component multiplierAB = Multiplier2();
	 component multiplierBC = Multiplier2();

	multiplierAB.a <== a;
	multiplierAB.b <== b;
	multiplierBC.a <== multiplierAB.c;
	multiplierBC.b <== c;

   // Constraints.  
   d <== multiplierBC.c;  
}

component main = Multiplier3();