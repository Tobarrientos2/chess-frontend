<!-- "Pseudo Notation" is a naming and representation system designed to provide clarity and structure in programming.

1. Type Prefixes and Suffixes: Each variable and method is labeled with prefixes and suffixes that clearly indicate the type of input and output data. For example, txt_ for text or arr_ for arrays in prefixes, and _obj for objects or _num for numbers in suffixes.

i (Input): The prefix 'i' is used to denote variables that are inputs. These are variables that are used to receive data from outside the method or function they are in. They represent the data coming into a block of code. For example, iUserName_txt could be a variable representing a username input in a text format.

p (Processing): The prefix 'p' indicates variables that are used for processing within the code. These are typically intermediary variables used for calculations, data transformation, or holding temporary data. They are not the primary inputs or outputs but are essential for the internal logic of the code. For instance, pSumTotal_num might be a processing variable used to hold the sum total of certain calculations.

o (Output): The prefix 'o' signifies output variables. These are variables that hold data which will be output from a method or function, or passed on to another part of the program. They represent the result of the processing. An example might be oProcessedData_arr, which could be an array of data processed by the function.

m (Method/Function): The prefix 'm' is used for methods or functions. This prefix is followed by the method's name and often includes information about the types of arguments it takes and the type of data it returns. For example, mCalculateTotal_num_arr could be a method that takes an array of numbers and returns a single number (the total).

2. Categorization: Entities are organized into general categories, each represented by an uppercase letter. For instance, A for game sessions, B for chess instances and actions, C for chess pieces, etc.

3. Specific Subcategories: Within each main category, specific subcategories or additional letters are used to specify concrete elements. For example, in the chess pieces category C, CA is used for pawns, CB for knights, etc.

4. Clear Description of Methods: Methods are described with a m prefix to differentiate them from variables. They include information about input and output types, making it easy to understand what the method does and what is expected as a result.


"Pseudo Notation" is particularly useful in large and complex projects, where consistency and clarity in nomenclature can significantly impact the efficiency of code development and maintenance. -->

### Index

# A - Game Elements
AA (Session): Game session management.
AB (Timer): Timers and time control.
AC (Listeners): Listeners for game events (moves, state changes).
AD (History): Move and game history.
AE (Storage): Game data storage and retrieval.

# B - Chess Instance and Actions
BA (Chess constructor): Constructor for creating chess game instances.
BB (ChessInstance): Active chess game instance, including current state, allowed moves, check validations, etc.
BC (FLAGS): Flags to indicate specific events in a move (capture, check, promotion, etc.).

# C - Chess Pieces
CA (Pawn): Pawns and their specific moves.
CB (Knight): Knights and their L-shaped moves.
CC (Bishop): Bishops and their diagonal moves.
CD (Rook): Rooks and their straight-line moves.
CE (Queen): Queens and their combined moves.
CF (King): Kings and their limited moves.

# D - Colors and Squares
DA (White/Black): Management of white and black pieces.
DB (Square): Representation and control of board squares (a8, b6, etc.).

#####

### PseudoNotionation Dictionary 

## AA-Session
iAAChess_obj: Instance of the chess game ChessInstance.
iAAListeners_obj: Listeners for the game session GameSessionListeners.
iAATimer_obj: Timer for the game session GameSessionTimer.
iAAHistory_arr: History of the game session GameSessionHistory.
iAATimeout_timer: Optional timer NodeJS.Timer.
iAACurrentIndex_num: Current index in the session's history.
iAAIsReset_bool: Boolean indicator if the session has been reset.

void_mAALoadFromStorage_void: Load session data from storage.
void_mAAKillTimer_void: Stop the session timer.
void_mAStartTimer_void: Start the session timer.
str_mAAGetOrientation_void_str: Get the board orientation.
obj_mAAMove_moveOptions_obj: Make a move in the session.
void_mAAReset_void: Reset the game session.
obj_mAUndo_void_obj: Undo the last move in the session.
obj_mAARedo_void_obj: Redo the last undone move.
void_mASetTimer_timer_void: Set the session timer.
obj_mAAGetPosition_void_obj: Get the current game position.
void_mAASave_void: Save the current session state.
bool_mAAIsFirstMove_void_bool: Check if it's the first move in the session.
bool_mAAIsGameOver_void_bool: Check if the game in the session has ended.
str_mAAGetLoser_void_str: Get the loser of the game in the session.
void_mAAOnBoardChange_listener_void: Method to subscribe to board changes.
void_mAAOnTimerChange_listener_void: Method to subscribe to timer changes.
void_mAATrigger_event_void: Trigger a specific event in the session.

# AB-Timer
iABWhite_num: Remaining time for the white player.
iABBlack_num: Remaining time for the black player.

# AC-Listeners
arr_ACMove_fn_arr: Array of functions to listen to moves. Each function takes a position (string) and doesn't return anything (void).
arr_ACTimer_fn_arr: Array of functions to listen to timer changes. Each function takes a AB-Timer object and doesn't return anything (void).

# AD-History
iADTimer_obj: Timer for the game session AB-Timer.
iADPosition_str: Current game position in string format.

# AE-Storage
iAEHistory_arr: History of the game session AD-History.
iAETimer_obj: Timer for the game session AB-Timer.
iAEPosition_str: Current game position in string format.
iAECurrentIndex_num: Current index in the AD-History.

# BA-Chess constructor => Chess
// (fen?: string): ChessInstance;
// new (fen?: string): ChessInstance;
@= txt_mBAChessConstructor_fen_obj Chess("fenString")++ // Create a new game instance with the specified FEN configuration

# BB-Chess Instance
txt_mBBLoad_fen_bool: Load a position from a FEN string.
void_mBBResetBoard_void: Reset the board to the initial position.
arr_mBBGetListOfMovements__options_arr: Get a list of legal moves.
bool_mBBInCheck_bool: Check if the side to move is in check.
bool_mBBInCheckmate_bool: Check if the side to move is in checkmate.
bool_mBBInStalemate_bool: Check if the game is in stalemate.
bool_mBBInDraw_bool: Check if the game is in a draw.
bool_mBBInsufficientMaterial_bool: Check if there is insufficient material to win.
bool_mBBThreeTimesRepeated_bool: Check if the position has been repeated three times.
bool_mBBGameOver_bool: Check if the game has ended.
txt_mBBValidateFEN_fen_obj: Validate a FEN string.
txt_mBBObtainFEN_void_txt: Get the current FEN string.
txt_mBBObtainPGN_options_txt: Get the game state in PGN format.
bool_mBBLoadPGN_pgnOptions_bool: Load a game from PGN format.
obj_mBBHeader_args_obj: Add header information to the PGN output.
txt_mBBAscii_void_txt: Get an ASCII diagram of the current position.
str_mBBTurn_void_str: Get the current side to move.
obj_mBBMakeAMoveOptions_obj: Make a move on the board.
obj_mBBUndoMove_void_obj: Undo the last half-move.
void_mBBClearBoard_void: Clear the board of all pieces.
bool_mBBPlaceAPieceOnSquare_bool: Place a piece on a square.
obj_mBBGetAPieceOnSquare_obj: Get the piece on a square.
obj_mBBRemoveAPieceOnSquare_obj: Remove a piece from a square.
str_mBBGetAColorOfSquare_square_str: Get the color of a square.
arr_mBBGetListOfMoves_options_arr: Get a list of moves in the current game.
txt_mBBGetComment_void_txt: Get the current comment.
void_mBBSetComment_comment_void: Set a comment.
txt_mBBDeleteComment_void_txt: Delete the current comment.
arr_mBBGetComments_void_arr: Get all comments.
void_mBBDeleteAllComments_void: Delete all comments.

# BC-FLAGS
iBCNormal_str: Move without capture.
iBCCapture_str: Standard capture.
iBCBigPawn_str: Pawn's two-square advance.
iBCEPCapture_str: En passant capture.
iBCPromotion_str: Pawn promotion.
iBCKsideCastle_str: Kingside castling.
iBCQsideCastle_str: Queenside castling.

# CA-Pawn
iCAPawn_obj: Represents pawns and their specific movements.

# CB-Knight
iCBKnight_obj: Represents knights and their L-shaped movements.

# CC-Bishop
iCCBishop_obj: Represents bishops and their diagonal movements.

# CD-Rook
iCDRook_obj: Represents rooks and their straight-line movements.

# CE-Queen
iCEQueen_obj: Represents queens and their combined movements.

# CF-King
iCFKing_obj: Represents kings and their limited movements.

# DA-White/Black
iDAWhite_obj: White Pieces
iDABlack_obj: Black Pieces

# DB-Square
iDBSquare_obj: Representation and control of the chessboard squares (a8, b6, etc.).






