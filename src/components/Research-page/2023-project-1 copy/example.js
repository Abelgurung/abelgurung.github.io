import { InlineMath, BlockMath } from "react-katex";
import mapping_img from "./mapping_func.png";
import transition from "./transition.png";

function Research() {
  return (
    <div className=" leading-7 md:w-3/4 mx-auto p-3 rounded-sm text-[#3A4145] space-y-3">
      <p>
        Consider a set <InlineMath>{"A"}</InlineMath> which represents the
        indices corresponding to individual cells in a single-cell RNA
        sequencing (sc-RNA-seq) dataset. The set <InlineMath>{"A"}</InlineMath>{" "}
        is defined as{" "}
        <InlineMath>{"A = \\{ 0 , 1 , 2 , \\ldots , N\\}"}</InlineMath> where{" "}
        <InlineMath>{"N + 1"}</InlineMath> is the total number of cells in the
        dataset, thereby indexing the cells from 0 to{" "}
        <InlineMath>{"N"}</InlineMath>.
      </p>

      <p>
        We define <InlineMath>{"F"}</InlineMath> as a surjective function (also
        known as an onto function), which maps every element in set{" "}
        <InlineMath>{"A"}</InlineMath> to an element in set{" "}
        <InlineMath>{"B"}</InlineMath>. The set <InlineMath>{"B"}</InlineMath>{" "}
        is formulated as{" "}
        <InlineMath>{"B = \\{ 0 , 1 , 2 , \\ldots , M \\}"}</InlineMath> where{" "}
        <InlineMath>{"M"}</InlineMath> is a non-negative integer that is less
        than or equal to <InlineMath>{"N"}</InlineMath>. The value of{" "}
        <InlineMath>{"M"}</InlineMath> represents the last index in set{" "}
        <InlineMath>{"B"}</InlineMath>, and it categorizes the cells into{" "}
        <InlineMath>{"M+1"}</InlineMath> possible groups or clusters.
      </p>

      <img className="h-[20rem]" src={mapping_img}></img>

      <p>
        In the context of sc-RNA-seq data analysis, we initially have a
        transition probability matrix, denoted as <InlineMath math="P" />, of
        dimensions <InlineMath math="(N+1) \times (N+1)" />. This matrix
        encapsulates the transition probabilities between individual cells,
        where each entry <InlineMath math="P_{ij}" /> represents the transition
        probability from cell <InlineMath math="A_i" /> to cell{" "}
        <InlineMath math="A_j" />, with <InlineMath math="i, j" /> being indices
        in set <InlineMath math="A" />.
      </p>
      <p>
        To construct a transition probability matrix for set{" "}
        <InlineMath math="B" />, which we will denote as <InlineMath math="Q" />
        , with dimensions <InlineMath math="(M + 1) \times (M+1)" />, we
        aggregate the transition probabilities from the matrix{" "}
        <InlineMath math="P" /> based on the mapping defined by the surjective
        function <InlineMath math="F" />. The entry <InlineMath math="Q_{xy}" />{" "}
        in the matrix <InlineMath math="Q" />, representing the transition
        probability from group <InlineMath math="B_x" /> to group{" "}
        <InlineMath math="B_y" />, is computed as follows:
      </p>
      <img className="h-[20rem]" src={transition}></img>
      <ul>
        <li>
          Identify all cells in group <InlineMath>{"B_x"}</InlineMath> and all
          cells in group <InlineMath>{"B_y"}</InlineMath> through the mapping
          function <InlineMath>{"F"}</InlineMath>.
        </li>
        <li>
          For each pair of cells <InlineMath>{"(A_i, A_j)"}</InlineMath> such
          that <InlineMath>{"A_i"}</InlineMath> belongs to group{" "}
          <InlineMath>{"B_x"}</InlineMath> and <InlineMath>{"A_j"}</InlineMath>{" "}
          belongs to group <InlineMath>{"B_y"}</InlineMath>, extract the
          corresponding transition probabilities{" "}
          <InlineMath>{"P_{ij}"}</InlineMath> from the matrix{" "}
          <InlineMath>{"P"}</InlineMath>.
        </li>
        <li>
          Sum all the extracted transition probabilities to obtain a cumulative
          transition probability from group <InlineMath>{"B_x"}</InlineMath> to
          group <InlineMath>{"B_y"}</InlineMath>.
        </li>
        <li>
          Normalize this cumulative transition probability by dividing it by the
          total sum of transition probabilities originating from group{" "}
          <InlineMath>{"B_x"}</InlineMath>, to yield the entry{" "}
          <InlineMath>{"Q_{xy}"}</InlineMath>.
        </li>
      </ul>
      <p>Mathematically, this can be expressed as:</p>
      <BlockMath>
        {
          "Q_{xy} = \\frac{\\sum_{i \\in F^{-1}(B_x), j \\in F^{-1}(B_y)} P_{ij}}{\\sum_{i \\in F^{-1}(B_x), k \\in A} P_{ik}}"
        }
      </BlockMath>
      <p>Where:</p>
      <ul className="">
        <li>
          <InlineMath>{"F^{-1}(B_x)"}</InlineMath> denotes the preimage of{" "}
          <InlineMath>{"B_x"}</InlineMath> under <InlineMath>{"F"}</InlineMath>,
          representing all cells in set <InlineMath>{"A"}</InlineMath> that are
          mapped to group <InlineMath>{"B_x"}</InlineMath>.
        </li>
        <li>
          The denominator represents the total sum of transition probabilities
          originating from group <InlineMath>{"B_x"}</InlineMath>, ensuring the
          probabilities in each row of matrix <InlineMath>{"Q"}</InlineMath> sum
          to 1.
        </li>
      </ul>
      <p>
        Through this procedure, we construct a transition probability matrix for
        set <InlineMath>{"B"}</InlineMath> that leverages the detailed
        transition probabilities available for set{" "}
        <InlineMath>{"A"}</InlineMath>, facilitating the analysis of group-level
        dynamics in the sc-RNA-seq data.
      </p>
    </div>
  );
}

export default Research;

// To construct a transition probability matrix for set \(B\), which we will denote as \(Q\), with dimensions \((M+1) \times (M+1)\), we aggregate the transition probabilities from the matrix \(P\) based on the mapping defined by the surjective function \(F\). The entry \(Q_{xy}\) in the matrix \(Q\), representing the transition probability from group \(B_x\) to group \(B_y\), is computed as follows:

// \begin{enumerate}
//     \item Identify all cells in group \(B_x\) and all cells in group \(B_y\) through the mapping function \(F\).
//     \item For each pair of cells \((A_i, A_j)\) such that \(A_i\) belongs to group \(B_x\) and \(A_j\) belongs to group \(B_y\), extract the corresponding transition probabilities \(P_{ij}\) from the matrix \(P\).
//     \item Sum all the extracted transition probabilities to obtain a cumulative transition probability from group \(B_x\) to group \(B_y\).
//     \item Normalize this cumulative transition probability by dividing it by the total sum of transition probabilities originating from group \(B_x\), to yield the entry \(Q_{xy}\).
// \end{enumerate}

// Mathematically, this can be expressed as:

// \[
// Q_{xy} = \frac{\sum_{i \in F^{-1}(B_x), j \in F^{-1}(B_y)} P_{ij}}{\sum_{i \in F^{-1}(B_x), k \in A} P_{ik}}
// \]

// Where:
// \begin{itemize}
//     \item \(F^{-1}(B_x)\) denotes the preimage of \(B_x\) under \(F\), representing all cells in set \(A\) that are mapped to group \(B_x\).
//     \item The denominator represents the total sum of transition probabilities originating from group \(B_x\), ensuring the probabilities in each row of matrix \(Q\) sum to 1, maintaining the property of a probability matrix.
// \end{itemize}

// Through this procedure, we construct a transition probability matrix for set \(B\) that leverages the detailed transition probabilities available for set \(A\), facilitating the analysis of group-level dynamics in the sc-RNA-seq data.
